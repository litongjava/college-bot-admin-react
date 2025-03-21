import React, {useState} from "react";
import jsPreviewDocx from "@js-preview/docx";
import '@js-preview/docx/lib/index.css';
// @ts-ignore
import {useParams} from 'umi';
import {Button, message, Upload} from "antd";
import {getDocxById} from "@/pages/file/docx/systemDocxService";

const PreviewDocx: React.FC = () => {
  const {id} = useParams<{ id: string }>();
  // 使用useRef创建一个引用
  const docxRef = React.useRef(null);

  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState("")
  const [urls, setUrls] = useState<any[]>([])

  function preview(url: string) {
    if (docxRef.current) {
      // 在组件挂载后初始化预览器，并确保DOM节点已经加载
      const myDocxPreviewer = jsPreviewDocx.init(docxRef.current);

      // 传递要预览的文件地址
      myDocxPreviewer.preview(url)
        .then(res => {
          messageApi.success('预览完成');
        }).catch(e => {
        messageApi.error('预览失败:' + url + ":", e);
      });
    }
  }

  React.useEffect(() => {
    if (id && id != ':id') {
      getDocxById(id).then(response => {
        if (response.ok) {
          const name = response.data.name;
          setName(name)
          let urls1 = response.data?.urls;
          setUrls(urls1);
          const url = urls1?.[0]?.url
          preview(url);
        } else {
          messageApi.error('Failed to fetch article: ' + id);
        }
      }).catch(err => messageApi.error('Failed to fetch article: ' + err));
    }
  }, [id]);

  const downloadFile = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'true');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDownload = () => {
    urls.forEach(urlObj => {
      downloadFile(urlObj.url);
    });
  };

  return (
    <>
      {contextHolder}
      <div>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{width:'90%'}}>
            <h1 style={{textAlign: "center"}}>{name}</h1>
          </div>
          <div style={{marginTop:"7px"}}>
            <Button onClick={handleDownload} type="primary">Download</Button>
          </div>
        </div>
        <div ref={docxRef} id="docx"></div>
      </div>
    </>

  );
}

export default PreviewDocx;
