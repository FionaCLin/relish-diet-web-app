import React from 'react';
import { isNull } from 'util';

const styles = {
    left : {
      width: '250px',
      height: '150px',
      border: '1px solid #DCDCDC',
      float: 'left'
    },
    droppable : {
      margin: '0 auto',
      width: '50%',
      marginTop: '80px'
    },
    para : {
      marginRight: '11px',
      border: '1px solid #DCDCDC',
      padding: '12px 16px',
      borderRadius: '50%',
      width: '15px',
      float : 'left'
    }
  }

  class DragDrop extends React.Component {
    constructor(props){
        super(props)
        this.dragOut = true;
        this.dragOutNum = null;
        this.state = {
          drags : [
            { no : 1, text : "This is text 1" },
            { no : 2, text : "This is text 2" },
            { no : 3, text : "This is text 3" },
            { no : 4, text : "This is text 4" }
          ],
          containers : [
              { no: 1, input: null },
              { no: 2, input: null }
          ]
        }
    }
    
    onDragStart = (e,v) =>{
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData( "text/plain", v )
    }

    onDragEnd = (e, v) => {
        e.preventDefault();
        if (this.dragOut || (!this.dragOut && this.dragOutNum !== v)) {
            console.log('trigger');
            let { containers } = this.state;
            containers[v].input = null;
            this.setState({ containers })
        }
        this.dragOut = true;
        this.dragOutNum = null;
    }
    
    allowDrop = ev =>{
        ev.preventDefault();
    }
    
    onDrop = (e,v) => {
        e.preventDefault();
        this.dragOut = false;
        this.dragOutNum = v;
        const data = e.dataTransfer.getData("text/plain");
        let { containers } = this.state;
        containers[v].input = parseInt(data, 10);
        this.setState({ containers });
        console.log(v);
    }

    render() {
        const {drags, containers} = this.state;

        return(
          <div>
              <div style={{ marginTop: '35px' }}>
                    Draggable texts : <br />
                    
                    <div style={{ display : 'inline-block' }}>
                      {
                        drags.map((item, key) =>{
                          return <p style={styles.para} draggable="true" onDragStart={ (e) => this.onDragStart(e, key) } >{item.no}</p>
                        })
                      }
                    </div>
              </div>

              <div style={styles.droppable}>
                      {
                          containers.map((item, key) => {
                              return <div style={styles.left} onDragOver={this.allowDrop} onDrop={(e) => this.onDrop(e, key)}>
                                {
                                    !isNull(item.input) ? <p style={styles.para} draggable="true" onDragEnd={ (e) => this.onDragEnd(e, key)} onDragStart={ (e) => this.onDragStart(e, item.input) } >{ drags[item.input].no }</p> : null
                                }</div>
                          })
                      }
              </div>
          </div>
        )
    }

}

export default DragDrop;