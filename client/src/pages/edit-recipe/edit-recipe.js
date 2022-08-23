import React, {useEffect, useCallback, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import {ingredientList} from '../../constants/dummyData';
import UploadImage from './Dropzone';
import EditImageModal from './EditImageModal';
import FormRow from '../../components/forms/form-row';

import {AsyncTypeahead} from 'react-bootstrap-typeahead';

const imageMaxSize = 1000000000; // bytes
const maxFiles = 10;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
// TODO for upload to server and Extract an Base64 Image's File Extension
function extractImageFileExtensionFromBase64(base64Data) {
  return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'));
}

const CACHE = {};
const PER_PAGE = 10;

const EditRecipe = ({UOM, recipe, loadRecipe, loadIngredients}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  if (id) {
    loadRecipe(id);
  }

  const [title, setTitle] = useState(recipe.title);
  const [titleError, setTitleError] = useState(false);
  const [amount, setAmount] = useState(recipe.amount);
  const [amountError, setAmountError] = useState(recipe.amountError);
  const [measure, setMeasure] = useState(recipe.measure);
  const [inputIngredient, setInputIngredient] = useState(recipe.inputIngredient);
  const [inputIngError, setInputIngError] = useState(recipe.inputIngError);

  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [images, setImages] = useState(recipe.images);
  const [method, setMethod] = useState(recipe.method);
  const [methodError, setMethodError] = useState(false);
  const [previewFiles, setPreviewFiles] = useState(recipe.previewFiles);

  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (q) => {
    setQuery(q);
    setInputIngError(false);
    setInputIngredient(null);
  };

  const handleSearch = useCallback((q) => {
    if (CACHE[q]) {
      setOptions(CACHE[q].options);
      return;
    }

    setIsLoading(true);
    loadIngredients(q).then((data) => {
      CACHE[q] = {count: data.count, options: data.rows};
      setOptions(data.rows);
      setIsLoading(false);
    });
  }, []);

  const handlePagination = (e, shownResults) => {
    const cachedQuery = CACHE[query];

    // Don't make another request if:
    // - the cached results exceed the shown results
    // - we've already fetched all possible results
    if (cachedQuery.options.length > shownResults || cachedQuery.options.length === cachedQuery.count) {
      return;
    }

    setIsLoading(true);

    const offset = cachedQuery.options.length;

    loadIngredients(query, offset).then((data) => {
      console.log(data);
      const options = cachedQuery.options.concat(data.rows);
      CACHE[query] = {...cachedQuery, options};

      setIsLoading(false);
      setOptions(options);
    });
  };

  const selectIngredient = (param) => {
    if (!param?.length) {
      return;
    }
    const [ingredient] = param;
    setMeasure(ingredient.UOM);
    setInputIngredient(ingredient);
    setOptions([]);
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
    console.log(inputIngredient);
    e.preventDefault();
    validateFields();
    if (amount <= 0 || !inputIngredient) {
      return;
    }

    const ingredient = {
      amount,
      ...inputIngredient,
    };
    setIngredients([...ingredients, ingredient]);
    setAmount(1);
    setMeasure('g');
    setInputIngredient(null);
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setPreviewFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);

  // clean up
  const removeFile = (index) => {
    previewFiles.splice(index, 1);
    console.log(index, previewFiles);
  };
  useEffect(
    () => () => {
      if (previewFiles?.length) {
        previewFiles.forEach((file) => URL.revokeObjectURL(file.preview));
      }
    },
    [previewFiles],
  );
  const saveRecipe = () => {
    console.log(title, method, ingredients, amount);
    setMethodError(method?.length === 0);
    setTitleError(title?.length === 0);
    setInputIngError(ingredients?.length === 0);
    setAmountError(amount <= 0);
  };
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
              className={`form-control title ${titleError ? 'field-error' : ''}`}
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
            <AsyncTypeahead
              className={`ingredient has-action-button ${inputIngError ? 'field-error' : ''}`}
              filterBy={() => true}
              id='ingredients'
              name='ingredients'
              isLoading={isLoading}
              labelKey='name'
              maxResults={PER_PAGE - 1}
              minLength={2}
              onInputChange={handleInputChange}
              onPaginate={handlePagination}
              onSearch={handleSearch}
              options={options}
              paginate
              placeholder='E.g. sugar'
              renderMenuItemChildren={(option) => (
                <div key={option.id}>
                  <span>{option.name}</span>
                </div>
              )}
              useCache={false}
              onChange={selectIngredient}
            />

            <button style={{float: 'right'}} onClick={(e) => addIngredient(e)} className='btn btn-secondary'>
              <span className='glyphicon glyphicon-plus'></span>
            </button>

            {ingredients?.length > 0 && (
              <ul className='editable-list'>
                {ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>
                      <button onClick={(e) => removeIngredient(e, index)} className='btn btn-secondary'>
                        {`${ingredient.amount} ${ingredient.UOM} ${ingredient.name}`}
                        <span className='pull-right'>
                          <span className='glyphicon glyphicon-remove'></span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </FormRow>
          <FormRow htmlFor='inputMethod' label='Method'>
            <textarea
              type='comment'
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              className={`form-control method ${methodError ? 'field-error' : ''}`}
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
            {previewFiles?.length > 0 && (
              <ul className='upload-image-previews'>
                {previewFiles.map((file, index) => (
                  <li>
                    <a className='view' href={file.preview} target='_blank' rel='noopener noreferrer'>
                      &#10066;
                    </a>
                    <a className='delete' onClick={(e) => removeFile(index, e)} href='#' rel='noopener noreferrer'>
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
          <button className='btn btn-success' onClick={(e) => saveRecipe()} style={{width: '115px'}}>
            {id ? 'Edit' : 'Create'}
          </button>
        </div>
        {/* <!--container end--> */}
      </Container>
    </div>
  );
};

export default EditRecipe;
