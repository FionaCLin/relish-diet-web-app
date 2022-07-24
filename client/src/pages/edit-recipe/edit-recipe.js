import React, {useState, useEffect, useCallback} from 'react';
import {bg_img} from '../../constants/globalFunctions';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {ingredientList} from '../../constants/dummyData';
import cuid from 'cuid';
import UploadImage from './Dropzone';
import EditImageModal from './EditImageModal';
//import ImageGrid from "./ImageGrid";
let params = {
  mode: 'add',
};

const imageMaxSize = 1000000000; // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
// Extract an Base64 Image's File Extension
function extractImageFileExtensionFromBase64(base64Data) {
  return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'));
}

const EditRecipe = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(1);
  const [amountError, setAmountError] = useState(false);
  const [measure, setMeasure] = useState('g');
  const [inputIngredient, setInputIngredient] = useState('');
  const [inputIngError, setInputIngError] = useState(false);
  const [ingredientsProp, setIngredientsProp] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [images, setImages] = useState([]);
  const [method, setMethod] = useState('');
  const [, , mode] = history.location.pathname.split('/');
  const [previewFiles, setPreviewFiles] = useState([]);
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

  const handleOnDrop = (files, rejectedFiles) => {
    console.log(files);
    if (rejectedFiles && rejectedFiles.length > 0) {
      verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        setPreviewFiles(files);
        // imageBase64Data
        // const currentFile = files[0];
        // const myFileItemReader = new FileReader();
        // myFileItemReader.addEventListener(
        //   'load',
        //   () => {
        //     // console.log(myFileItemReader.result)
        //     const myResult = myFileItemReader.result;
        //     /* this.setState({
        //       imgSrc: myResult,
        //       imgSrcExt: extractImageFileExtensionFromBase64(myResult),
        //     }); */
        //   },
        //   false,
        // );

        //myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };

  return (
    <div className='bg-white'>
      <Container className='pt-2 m-auto'>
        <Row className='justify-content-sm-between'>
          <Col md={4}>
            <h3>{mode == 'add' ? 'New' : 'Edit'} Recipe</h3>
          </Col>
          <Col md={{span: 2, offset: 6}}></Col>
        </Row>
        <br></br>
        <form>
          <div className='form-group row'>
            <label htmlFor='inputTitle' className='col-sm-2 col-form-label'>
              Title
            </label>
            <div className='col-sm-10'>
              <input
                type='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='form-control'
                id='inputTitle'
                placeholder={mode == 'add' ? 'Add Title...' : 'Edit Title...'}
              ></input>
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='inputIngredient' className='col-sm-2 col-form-label'>
              Ingredient
            </label>
            <div className='col-sm-10'>
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
                {props.UOM.length && props.UOM.map((uom, i) => <option key={i}>{uom}</option>)}
              </select>
              <div style={{float: 'left', marginLeft: '10px', marginRight: '10px', lineHeight: '32px'}}>of</div>
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
                {ingredientsProp.map((ingredient) => {
                  return <option>{ingredient}</option>;
                })}
              </datalist>
              <button style={{float: 'right'}} onClick={(e) => addIngredient(e)} className='btn btn-secondary'>
                <span className='glyphicon glyphicon-plus'></span>
              </button>
              {
                <ul className='editable-list'>
                  {ingredients.map((ingredient, index) => (
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
            </div>
          </div>

          <div className='form-group row'>
            <label htmlFor='inputMethod' className='col-sm-2 col-form-label'>
              Method
            </label>
            <div className='col-sm-10'>
              <textarea
                type='comment'
                onChange={(e) => setMethod(e.target.value)}
                value={method}
                className='form-control'
                id='inputMethod'
                rows='5'
                placeholder='Add method...'
              ></textarea>
            </div>
          </div>
          <div className='form-group row'>
            <hr></hr>
          </div>
          <h4>Recipe Images</h4>
          <div className='form-group row'>
            <div className='col-sm-2'>
              <label htmlFor='inputImage1' className='col-form-label'>
                Images
              </label>
            </div>
            <div className='col-sm-10'>
              {/* <input
                list='ingredients'
                value={this.state.string}
                name='ingredients'
                placeholder='E.g. Step 1'
                onChange={(e) => this.autocomplete(e)}
                className='ingredient form-control'
              ></input> */}
              {/* 
              <input
                onChange={(e) => this.changeImg(e, 0)}
                type='file'
                className='form-control-file has-action-button'
                id='inputImage1'
              ></input>
              <button style={{float: 'right'}} onClick={(e) => this.addIngredient(e)} className='btn btn-secondary'>
                <span className='glyphicon glyphicon-plus'></span>
              </button> */}
              <UploadImage
                handleOnDrop={handleOnDrop}
                acceptedFileTypes={acceptedFileTypes}
                imageMaxSize={imageMaxSize}
              />
            </div>
          </div>
          <div className='form-group row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-10'>
              {previewFiles.length === 0 ? (
                <p>Nothing to show</p>
              ) : (
                <ul className='upload-image-previews'>
                  {previewFiles.map((file) => (
                    <li>
                      <a href={file.preview} target='_blank'>
                        &#10066;
                      </a>
                      <img src={file.preview} />
                      <p>{file.name}</p>
                    </li>
                  ))}
                </ul>
              )}
              <EditImageModal/>
            </div>
          </div>
          <div className='form-group row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-10'>
              {images[0] && (
                <div>
                  <div style={bg_img(images[0])} className='planner_img_v'></div>
                  <div className='pic_bottom'>Step 1</div>
                </div>
              )}
            </div>
          </div>
          <div className='form-group row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-10'>
              {images[1] && (
                <div>
                  <div style={bg_img(images[1])} className='planner_img_v'></div>
                  <div className='pic_bottom'>Step 2</div>
                </div>
              )}
            </div>
          </div>
          <div className='form-group row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-10'>
              {images[2] && (
                <div>
                  <div style={bg_img(images[2])} className='planner_img_v'></div>
                  <div className='pic_bottom'>Step 3</div>
                </div>
              )}
            </div>
          </div>
        </form>
        <div className='action-buttons-bottom'>
          <Link to='../../recipes'>
            <button className='btn btn-secondary' style={{width: '110px', marginRight: '10px'}}>
              Cancel
            </button>
          </Link>
          <button className='btn btn-success' onClick={(e) => this.editRecipe(e)} style={{width: '115px'}}>
            <Link to='../../recipes'>{mode == 'add' ? 'Create' : 'Edit'}</Link>
          </button>
        </div>
        {/* <!--container end--> */}
      </Container>
    </div>
  );
};

// class EditRecipe extends React.Component {
//   constructor(props) {
//     super(props);
//     let recipe = null;
//     console.log(this.props, '####');
//     const {params} = this.props['0'].match;
//     if (mode == 'edit') {
//       recipe = this.props.recipeInfo.find((x) => x.id == params.id);
//     } else {
//       recipe = {
//         name: '',
//         method: '',
//         ingredients: [],
//         macros: {
//           Energy: 10,
//           Carbs: 20,
//           Protein: 30,
//           Fats: 40,
//           Sodium: 50,
//         },
//         img: [],
//       };
//     }

//     console.log(recipe.img);
//     this.state = {
//       ingredientsProp: [],
//       string: '',
//       measure: '',
//       amount: '',
//       name: recipe.name,
//       ingredients: recipe.ingredients,
//       method: recipe.method,
//       macros: recipe.macros,
//       img: recipe.img,
//     };
//   }

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

// addIngredient = (e) => {
//   e.preventDefault();
//   let {ingredients} = this.state;
//   let ingredient = this.state.amount + ' ' + this.state.measure + ' of ' + this.state.string;
//   ingredients.push(ingredient);
//   this.setState({ingredients});
//   let string = '';
//   this.setState({string});
//   let amount = '';
//   this.setState({amount});
//   let measure = '';
//   this.setState({measure});
// };

// changeMeasure = (e) => {
//   e.preventDefault();
//   let measure = e.target.value;
//   this.setState({measure});
// };

// changeAmount = (e) => {
//   e.preventDefault();
//   let amount = e.target.value;
//   this.setState({amount});
// };

// removeIngredient = (e, ingredient) => {
//   e.preventDefault();
//   let {ingredients} = this.state;
//   ingredients.splice(ingredients.indexOf(ingredient), 1);
//   this.setState({ingredients});
// };

// changeTitle = (e) => {
//   e.preventDefault();
//   let {name} = this.state;
//   name = e.target.value;
//   this.setState({name});
// };

// changeMethod = (e) => {
//   e.preventDefault();
//   let {method} = this.state;
//   method = e.target.value;
//   this.setState({method});
// };

// changeImg = (e, index) => {
//   e.preventDefault();
//   let {img} = this.state;
//   let image = e.target.value.split('\\');
//   img[index] = 'images/' + image[image.length - 1];
//   this.setState({img});
// };

// editRecipe = (e) => {
//   e.preventDefault();
//   const {params} = this.props['0'].match;
//   let recipes = this.props.recipeInfo;
//   let recipe = {
//     id: 600,
//     creator: this.props.curr_user,
//     name: this.state.name,
//     img: images,
//     macros: {
//       Energy: 60,
//       Carbs: 80,
//       Protein: 10,
//       Fats: 60,
//       Sodium: 10,
//     },
//     method: this.state.method,
//     ingredients: this.state.ingredients,
//     comments: [],
//   };

//   if (mode == 'edit') {
//     let recipeIndex = recipes.indexOf(recipes.find((x) => x.id == params.id));
//     recipes[recipeIndex] = recipe;
//   } else {
//     recipes.unshift(recipe);
//   }
//   this.props.editRecipes(recipes);
//   console.log('Enter', recipe);
// };

// render() {
//   const {params} = this.props['0'].match;
//   // console.log(this.props.UOM, "((((((((((((((((");
//   return (

//   );
// }
// }

export default EditRecipe;
