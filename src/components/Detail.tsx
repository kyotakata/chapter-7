import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { PostType } from "../types/post";

const detailContainerStyle: React.CSSProperties = {
  margin: "40px auto",
  maxWidth: "800px",
};

const detailPostStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
};

const detailPostImageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
};

const detailPostContentStyle: React.CSSProperties = {
  padding: "1rem"
};

const detailPostInfoStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
}

const detailPostDateStyle: React.CSSProperties = {
  color: "#888",
  fontSize: ".8rem",
};

const detailPostCategoriesStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
}

const detailPostCategoryStyle: React.CSSProperties = {
  border: "1px solid #06c",
  borderRadius: ".2rem",
  color: "#06c",
  fontSize: ".8rem",
  marginRight: ".5rem",
  padding: ".2rem .4rem",
}

const detailPostTitleStyle: React.CSSProperties =  {
  fontSize: "1.5rem",
  marginBottom: "1rem",
  marginTop: ".5rem",
}

const detailPostBodyStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.5",
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  overflow: "hidden",
}

export const Detail = () => {
  const [post, setPost] = useState<PostType>(); 
  const [loading, setLoading] = useState<boolean>(true); 
  const { id } = useParams();
  useEffect(() => {
    const fetcher = async () => {
      try{
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
        const data = await res.json();
        setPost(data.post);
      }finally{
        setLoading(false);
      }
    }
    fetcher()
  }, []);

  if(loading){
    return <div>読み込み中...</div>;
  }

  if (!post) {
    return <div>記事が見つかりませんでした</div>;
  }
  return (
    <div style={detailContainerStyle}>
      <div style={detailPostStyle}>
        <div style={detailPostImageStyle}>
          <img src={post.thumbnailUrl}/>
        </div>
        <div style={detailPostContentStyle}>
          <div style={detailPostInfoStyle}>
            <div style={detailPostDateStyle}>{new Date(post.createdAt).toISOString().slice(0, 10)}</div>
            <div style={detailPostCategoriesStyle}>
              {post.categories.map((cat, index) => (
                <div style={detailPostCategoryStyle} key={index}>{cat}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={detailPostTitleStyle}>{post.title}</div>
        <div style={detailPostBodyStyle} dangerouslySetInnerHTML={{ __html: post.content }}/>
      </div>
    </div>
  );
};