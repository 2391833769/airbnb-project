
function Index(props) {
  const [messageApi, contextHolder] = message.useMessage();
  const [result, setResult] = useState(null);
  const [templateID, setTemplateID] = useState(null);
  useEffect(() => {
      templateStore.getAllContractCover().then((data) => {
          setResult(data.result);
      }).catch((err) => {
          console.log("AllCover", err)
      })
  }, [])
  const { token } = theme.useToken();
  const divstyle = {
      lineHeight: '260px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
      width: '90%',
      height: '90%',
      marginLeft: '5%',
  };
  const cardstyle = {
      height: '85%',
      width: '85%',
      marginTop: '4%',
      marginLeft: '7%',
  }
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = (value) => {
      setTemplateID(value.target.value)
      setOpen(true);
  };
  const handleOk = () => {
      setConfirmLoading(true);
      deleteTemplate();
      setTimeout(() => {
          messageApi.open({
              type: 'success',
              content: 'This is a success message',
          });
          setOpen(false);
          setConfirmLoading(false);
      }, 2000);
  };
  const handleCancel = () => {
      setTemplateID(null);
      setOpen(false);
  };





  const deleteTemplate = () => {
      const data = {
          id: templateID
      }
      templateStore.deleteContractTemplate(data)
  };

  const setbuttons = () => {
      // if (!result) {
          console.log("asdasdasdsd")
          return (
              <div>dfoiasjdifo</div>
          )
      // }
      // return (result.map((item, index) => {
      //     console.log("id", item);
      //     return (
      //         <div>
      //             <Popconfirm
      //                 title="刪除确认"
      //                 description="是否确认删除该合同！（删除后只能联系管理员恢复）"
      //                 open={open}
      //                 onConfirm={handleOk}
      //                 okButtonProps={{
      //                     loading: confirmLoading,
      //                 }}
      //                 onCancel={handleCancel}
      //             ></Popconfirm>

      //             <Button id={item.id} key={item.id} block onClick={e => showPopconfirm(e)} >
      //                 {
      //                     item.name
      //                 }
      //             </Button>
      //         </div>
      //     )
      // }))
  }

  return (
      <>
          <div style={divstyle}>
              <Card
                  bordered={false}
                  style={cardstyle}
              >
                  {contextHolder}
                  <div>
                      <h1 style={{ fontSize: '26px', marginTop: '6%' }}>删除模板</h1>
                  </div>
                  <div>
                      {setbuttons}
                  </div>
              </Card>
          </div >
      </>
  )
}
export default Index