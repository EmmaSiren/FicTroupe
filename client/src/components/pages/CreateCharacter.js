import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio, Upload, Row, Card  } from 'antd';
import { PlusOutlined  } from '@ant-design/icons';

const CreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>
        Upload
      </div>
    </div>
  );

  return (
    <Modal
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
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item name="Name"
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
        <Form.Item name="photo"
          label="Upload a photo of them.">
          <Upload listType="picture-card">
            {uploadButton}
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
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <Row id="middleAlign" >
      <Button onClick={() => { setOpen(true) }}>Create New Character</Button>
      <CreateForm open={open} onCreate={onCreate} onCancel={() => { setOpen(false) }} />
    </Row>
  );
};
