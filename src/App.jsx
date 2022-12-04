import { useState, useEffect } from 'react'
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './app.css';

function App() {

  const initialText = `
  # This is my Markdown Previewer!

  ## This was made mainly using React and Tailwind
  ### Here is some stuff to see as an example: 

  Lets try something: 
  ${"`<div> Some code </div>`"}
  
  ${"```"}
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == ${"'```'"} && lastLine == ${"'```'"}) {
      return multiLineCode;
    }
  }
  ${"```"}

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also links: [like this one to my Github profile](https://github.com/yaoming16), and
  > Block Quotes!

  And Tables: 

  Amazing Header | Normal Header | Uh Header?
  -------------- | ------------- | ----------
  content here |     | Huh, no content there

  We have lists too: 

  - Milk
  - Bread
      - We have different levels
        - Amazing right ?
      - Lets go back
    - One more
      - Or maybe not  

  1. And there are numbered lists too.
  1. We can use only 1s 
  16. But my favourite number is 16
  42. 42 is a great number too, i wonder why... 


  ![Cool gif](https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif)



  `

  const [display, setDisplay] = useState(initialText);
  const [editorFC, seteditorFC] = useState(false);
  const [previewerFC, setPreviewerFC] = useState(false);

  return (
    <div className='bg-lime-400 h-full absolute w-full' id='app'>
      <div className='w-full h-full'>
        <Editor id="editor" display={display} setDisplay={setDisplay} editorFC={editorFC} seteditorFC={seteditorFC} previewerFC={previewerFC} />
        <Previewer id="preview" display={display} previewerFC={previewerFC} setPreviewerFC={setPreviewerFC} editorFC={editorFC} />
      </div>
    </div>
  )
}

export default App
