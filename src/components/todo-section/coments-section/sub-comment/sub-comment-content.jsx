const SubCommentContent = ({s,c})=> {
  return ( <div>
     
     
     { c.id === s.commentID ? 
      <div className="sub__comment_name">{s.subComments.subComments}</div>
      : null}
  
  
  </div> );
}

export default SubCommentContent ;