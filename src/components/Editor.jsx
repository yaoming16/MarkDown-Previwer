import Button from "./Button";

function Editor({ id, display, setDisplay, editorFC, seteditorFC, previewerFC }) {

  return (
    <div
      className={`mt-10 w-9/12 max-w-[600px]
      drop-shadow-lg ml-auto mr-auto  ${previewerFC ? 'hidden' : ''} `} >
      <div className="bg-lime-600  border border-b-0 border-black font-bold p-1 flex justify-between" >
        <p>Editor</p>
        <Button elementFC={editorFC} setElementFC={seteditorFC} />
      </div>
      <textarea
        className={`min-h-[200px] w-full bg-lime-200 p-2 border border-black 
        ${editorFC ? 'h-screen resize-none' : ''}`}
        value={display}
        id={id}
        onChange={(e) => setDisplay(e.target.value)} >
      </textarea>
    </div>
  )
}

export default Editor