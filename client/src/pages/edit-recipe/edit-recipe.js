import React, {useEffect, useCallback, useState} from 'react';
import {bg_img} from '../../constants/globalFunctions';
import {Container, Row, Col} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ingredientList} from '../../constants/dummyData';
import UploadImage from './Dropzone';
import EditImageModal from './EditImageModal';
import FormRow from '../../components/forms/form-row';
import {useNavigate} from 'react-router-dom';

const imageMaxSize = 1000000000; // bytes
const maxFiles = 10;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
// TODO for upload to server and Extract an Base64 Image's File Extension
function extractImageFileExtensionFromBase64(base64Data) {
  return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'));
}

const EditRecipe = ({UOM, recipe, loadRecipe}) => {
  const {id} = useParams();
  const navigate = useNavigate();

  loadRecipe(id);
  const [title, setTitle] = useState(recipe.title);
  const [amount, setAmount] = useState(recipe.amount);
  const [amountError, setAmountError] = useState(recipe.amountError);
  const [measure, setMeasure] = useState(recipe.measure);
  const [inputIngredient, setInputIngredient] = useState(recipe.inputIngredient);
  const [inputIngError, setInputIngError] = useState(recipe.inputIngError);
  const [ingredientsProp, setIngredientsProp] = useState(recipe.ingredientsProp);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [images, setImages] = useState(recipe.images);
  const [method, setMethod] = useState(recipe.method);
  const [previewFiles, setPreviewFiles] = useState(recipe.previewFiles);

  const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => {
    return item.trim();
  });

  const autocomplete = (e) => {
    e.preventDefault();
    setInputIngredient(e.target.value);
    const ingredientsProp = ingredientList.filter((item) => ingredientList.includes(inputIngredient));
    setIngredientsProp(ingredientsProp);
  };

  const removeIngredient = (e, index) => {
    e.preventDefault();
    const ingredientsNew = ingredients.filter((_, i) => i !== index);
    setIngredients(ingredientsNew);
  };

  const validateFields = () => {
    setAmountError(amount <= 0);
    setInputIngError(!inputIngredient);
  };

  const addIngredient = (e) => {
    e.preventDefault();
    validateFields();
    if (amount <= 0 || !inputIngredient) {
      return;
    }
    const ingredient = {
      amount,
      measure,
      inputIngredient,
    };
    setIngredients([...ingredients, ingredient]);
    setAmount(1);
    setMeasure('g');
    setInputIngredient('');
  };

  const verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert('This file is not allowed. ' + currentFileSize + ' bytes is too large');
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert('This file is not allowed. Only images are allowed.');
        return false;
      }
      return true;
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    setPreviewFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);
  // const handleOnDrop = (files, rejectedFiles) => {
  //   console.log(files);
  //   if (rejectedFiles && rejectedFiles.length > 0) {
  //     verifyFile(rejectedFiles);
  //   }

  //   if (files && files.length > 0) {
  //     const isVerified = verifyFile(files);
  //     if (isVerified) {
  //       setPreviewFiles(files);

  //     }
  //   }
  // };

  // clean up
  useEffect(
    () => () => {
      if (previewFiles?.length) {
        previewFiles.forEach((file) => URL.revokeObjectURL(file.preview));
      }
    },
    [previewFiles],
  );

  return (
    <div className='bg-white'>
      <Container className='pt-2 m-auto'>
        <Row className='justify-content-sm-between'>
          <Col md={4}>
            <h3>{id ? 'Edit' : 'New'} Recipe</h3>
          </Col>
          <Col md={{span: 2, offset: 6}}></Col>
        </Row>
        <br></br>
        <form>
          <FormRow htmlFor='inputTitle' label='Title'>
            <input
              type='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='form-control'
              id='inputTitle'
              placeholder={`${id ? 'Edit' : 'Add'}  Title...`}
            />
          </FormRow>
          <FormRow htmlFor='inputIngredient' label='Ingredient'>
            <input
              type='number'
              name='amount'
              value={amount}
              onChange={(e) => {
                setAmountError(false);
                setInputIngError(false);
                setAmount(e.target.value);
              }}
              min='1'
              placeholder='E.g. 1'
              size='8'
              className={`form-control amount ${amountError ? 'field-error' : ''}`}
              id='inputIngredient'
            />
            <select
              value={measure}
              onChange={(e) => setMeasure(e.target.value)}
              className='form-control measure'
              placeholder='E.g. tbsp'
            >
              {UOM?.length && UOM.map((uom, i) => <option key={i}>{uom}</option>)}
            </select>
            <div
              style={{
                float: 'left',
                marginLeft: '10px',
                marginRight: '10px',
                lineHeight: '32px',
              }}
            >
              of
            </div>
            <input
              list='ingredients'
              value={inputIngredient}
              name='ingredients'
              placeholder='E.g. sugar'
              onChange={(e) => {
                setAmountError(false);
                setInputIngError(false);
                autocomplete(e);
              }}
              className={`ingredient form-control has-action-button ${inputIngError ? 'field-error' : ''}`}
            />
            <datalist id='ingredients'>
              {ingredientsProp?.length &&
                ingredientsProp.map((ingredient) => {
                  return <option>{ingredient}</option>;
                })}
            </datalist>
            <button style={{float: 'right'}} onClick={(e) => addIngredient(e)} className='btn btn-secondary'>
              <span className='glyphicon glyphicon-plus'></span>
            </button>
            {
              <ul className='editable-list'>
                {ingredients?.length &&
                  ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <button onClick={(e) => removeIngredient(e, index)} className='btn btn-secondary'>
                        {`${ingredient.amount} ${ingredient.measure} ${ingredient.inputIngredient}`}
                        <span className='pull-right'>
                          <span className='glyphicon glyphicon-remove'></span>
                        </span>
                      </button>
                    </li>
                  ))}
              </ul>
            }
          </FormRow>
          <FormRow htmlFor='inputMethod' label='Method'>
            <textarea
              type='comment'
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              className='form-control'
              id='inputMethod'
              rows='5'
              placeholder='Add method...'
            ></textarea>
          </FormRow>
          <hr></hr>
          <h4>Recipe Images</h4>
          <FormRow htmlFor='inputImages' label='Images'>
            <UploadImage
              onDrop={onDrop}
              acceptedFileTypes={acceptedFileTypes}
              imageMaxSize={imageMaxSize}
              maxFiles={maxFiles}
            />
          </FormRow>
          <FormRow>
            {previewFiles?.length && (
              <ul className='upload-image-previews'>
                {previewFiles.map((file) => (
                  <li>
                    <a className='view' href={file.preview} target='_blank' rel='noopener noreferrer'>
                      &#10066;
                    </a>
                    <a className='delete' href={file.preview} target='_blank' rel='noopener noreferrer'>
                      &#9747; 
                    </a>
                    <img src={file.preview} />
                    <p>{file.name}</p>
                  </li>
                ))}
              </ul>
            )}
            <EditImageModal />
          </FormRow>
        </form>
        <div className='action-buttons-bottom'>
          <button
            className='btn btn-secondary'
            onClick={() => navigate('/recipes')}
            style={{width: '110px', marginRight: '10px'}}
          >
            Cancel
          </button>
          <button className='btn btn-success' onClick={(e) => this.editRecipe(e)} style={{width: '115px'}}>
            {/* <Link to='../../recipes'> */}
            {id ? 'Edit' : 'Create'}
            {/* </Link> */}
          </button>
        </div>
        {/* <!--container end--> */}
      </Container>
    </div>
  );
};

// autocomplete = (e) => {
//   e.preventDefault();
//   let ingredientsProp = [];
//   let string = e.target.value;
//   for (let ingredient of this.props.ingredientList) {
//     if (ingredient.includes(e.target.value)) {
//       ingredientsProp.push(ingredient);
//       if (ingredientsProp.length === 6) {
//         break;
//       }
//     }
//   }
//   this.setState({string});
//   this.setState({ingredientsProp});
// };

export default EditRecipe;
