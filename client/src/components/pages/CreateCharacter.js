import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio, Upload, Row, message, Card  } from 'antd';
import { LoadingOutlined, PlusOutlined  } from '@ant-design/icons';
import { useMutation} from '@apollo/client';
import { ADD_CHARACTER } from '../../utils/mutations';
import  Dashboard  from './Dashboard';

// import { imgUpload } from '../../utils/helper';


const CreateForm = ({ open, onCreate, onCancel }) => {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const uploadButton = (
    <div >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>
        Upload
      </div>
    </div>
  );

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      console.log("INFO"+info.file)

      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  return (
    <Modal
      className="handlee"
      open={open}
      title="New Character"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values)
            // CreateCharacter(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item name="name"
          label="What's your character's name?"
          rules={[{ required: true, message: 'Give your character a name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description"
          label="Give a brief description of your character."
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="universe"
          label="What universe are they from?"
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="imageFile"
          label="Upload a photo of them.">
          <Upload 
          // action={"http://localhost:3000"}
          listType="picture-card"
          accept="image/jpeg, image/png, image/jpg"
          beforeUpload={beforeUpload}
      onChange={handleChange}
          >
            {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
          </Upload>
        </Form.Item>
        <Form.Item name="status" 
          label="What's the character's status?">
          <Radio.Group>
            <Radio value="draft">Draft</Radio>
            <Radio value="private">Private</Radio>
            <Radio value="public">Public</Radio>
            <Radio value="available">Available</Radio>
            <Radio value="sold">Sold</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function CreateCharacter() {
const [addCharacter] = useMutation(ADD_CHARACTER);
  const [open, setOpen] = useState(false);


  const onCreate = async (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
    console.log(values.name)
    const charName = values.name;
    const charDesination = values.description;

    const charUniverse = values.universe;

    const charStatus = values.status;

    console.log(typeof(charName))

//     const { items } = values

// const charData = values.map((character) => ({
//   name: character.name,
//   description : character.description,
//   universe : character.universe,
//   status: character.status
// }));
const response = await addCharacter({
  variables: {
    "name": charName,
  "description" : charDesination,
  "universe" : charUniverse,
  "status" : charStatus
  },
});
console.log(response);


    // const data = new FormData();
// data.append("image-file",values.imageFile.file.originFileObj)
    
//     console.log(data);
//       // const photoFile = values.photo.file
    
//     // console.log ("HERE"+photoFile)
      
//         const response = await fetch('http://localhost:3001/', {
//           method: 'POST',
//           body: data,
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });
    
//         if (response.ok) {
//           console.log("WORKED");
//         } else {
//           console.log("DID NOT");
//         }
   
// Dashboard()

  }

  return (
    <Row id="middleAlign" >
      <Button className="handleeButton" onClick={() => { setOpen(true) }}>Create New Character</Button>
      <CreateForm open={open} onCreate={onCreate} onCancel={() => { setOpen(false) }} />
    </Row>
  );
};
