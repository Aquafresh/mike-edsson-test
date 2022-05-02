import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { scheme } from '../../slices/formSlice';
import { layout } from '../../slices/layoutSlice';
import { useGetSchemeFormEffect } from './hooks/useGetSchemeForm.effect';
import { useGetLayoutEffect } from './hooks/useGetLayout.effect';
import { usePostSchemeFormEffect } from './hooks/usePostSchemeForm.effect';
import { ILayoutColumns, ILayoutField } from '../../slices/layout.interface';

const STATUS_SUCCESS = 200;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  width: 500px;
  margin: 30px auto;
  border-radius: 5px;
  padding: 20px;
`;

const Header = styled.div``;
const Control = styled.div`
  padding-top: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
  border-top: 1px solid #ccc;
`;

interface IFormData {
  [index: string]: string
}

export const Home = () => {
  const schemeForm = useSelector(scheme);
  const layoutScheme = useSelector(layout);

  const getSchemeFormState = useGetSchemeFormEffect();
  const getLayoutState = useGetLayoutEffect();
  const postFormState = usePostSchemeFormEffect();

  const [formData, setFormData] = useState<IFormData>({
  });

  useEffect(() => {
    getSchemeFormState.handleSchemeForm();
    getLayoutState.handleLayout();
  }, []);

  useEffect(() => {
    if (postFormState.status === STATUS_SUCCESS) {
      setFormData({
      });
    }
  }, [postFormState.status]);

  const handleSubmit = () => {
    postFormState.handlePostForm(formData);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setFormData({
      ...formData, [id]: e.target.value,
    });
  };

  const layoutRender = useMemo(() => layoutScheme.header.rows.map((item: ILayoutColumns, i: number) => {
    const elems = item.columns.map((elem: ILayoutField) => {
      const control = schemeForm.schema.fields.filter((filteredItem: ILayoutField) => elem.fieldId === filteredItem.id);

      if (elem.type === 'field') {
        return (
          <Grid item xs={6} key={control[0].id}>
            <TextField
              value={formData[control[0].id] ? formData[control[0].id] : ''}
              error={!!postFormState.error.length}
              id={control[0].id}
              label={control[0].label}
              variant="standard"
              type={control[0].type}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, control[0].id)}
              inputProps={{
                maxLength: control[0].maxLength,
              }}
            />
          </Grid>
        );
      }

      return null;
    });

    // eslint-disable-next-line react/no-array-index-key
    return <Grid container spacing={2} key={i}>{elems}</Grid>;
  }), [schemeForm, layoutScheme, formData, postFormState.error]);

  const layoutControlsRender = useMemo(() => layoutScheme.actions.rows.map((item: ILayoutColumns, i: number) => {
    const elems = item.columns.map((elem: ILayoutField, index: number) => {
      if (elem.type === 'button') {
        return (
        // eslint-disable-next-line react/no-array-index-key
          <Grid item key={index}>
            <Button onClick={handleSubmit} variant="contained">{elem.label}</Button>
          </Grid>
        );
      }
      return null;
    });
    // eslint-disable-next-line react/no-array-index-key
    return <Grid container spacing={2} key={i}>{elems}</Grid>;
  }), [schemeForm, layoutScheme, formData]);

  return (
    <Wrapper>
      <Typography variant="h6" component="div" gutterBottom>
        Document Definition Form
      </Typography>
      <Header>{layoutRender}</Header>
      <Control>{layoutControlsRender}</Control>

      {postFormState.status === STATUS_SUCCESS && <Alert severity="success">Document was successful saved!</Alert>}
    </Wrapper>
  );
};
