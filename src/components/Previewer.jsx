import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import Button from './Button';
import remarkBreaks from 'remark-breaks'
import rehypeHighlight from 'rehype-highlight'
import { useEffect } from 'react';

function Previewer({ id, display, previewerFC, setPreviewerFC, editorFC }) {

  useEffect(() => {
    document.getElementsByClassName('markdown')[0].setAttribute('id', 'preview')
  }, [])


  return (
    <div className={`bg-lime-200   mt-10  w-10/12 ml-auto mr-auto mb-5
       min-h-[400px] max-w-[800px] border border-black drop-shadow-xl
       ${previewerFC ? 'min-h-full' : editorFC ? 'hidden' : ''}`}>
      <div className="bg-lime-600  font-bold p-1 border-b border-black flex justify-between" >
        <p>Previewer</p>
        <Button elementFC={previewerFC} setElementFC={setPreviewerFC} />
      </div>
      <div className='w-full mr-0'>
        <ReactMarkdown
          className='markdown break-words prose prose-custom max-w-none p-2'
          children={display}
          remarkPlugins={[[remarkGfm], [remarkBreaks], [rehypeHighlight]]} />
      </div>
    </div>
  )
}

export default Previewer