import ReactHtmlParser from 'react-html-parser';

export default function PostRender(props) {

    return (<>
        <h1>{props?.title}</h1>
        <hr/>
        <div className='postdiv'>{ ReactHtmlParser(props?.content) }</div>
    </>)
}