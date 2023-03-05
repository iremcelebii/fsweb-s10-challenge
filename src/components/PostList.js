import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const PostList = () => {
  const notlar = useSelector((depo) => depo.notlar);
  for (let i = 0; i < notlar.length; i++) {
    notlar[i]["sayi"] = i + 1;
  }

  console.log(notlar);
  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} sayi={not.sayi} />
      ))}
    </div>
  );
};

export default PostList;
