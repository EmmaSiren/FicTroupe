import React from 'react';

import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, Button, Upload } from 'antd';


export default function CreateCharacter() {
  <div>
    <Form className="form">
      <p>Name:</p>
      <Input name="name" background="background" status="status" type="text" />
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Button className="button" type="button">Submit</Button>
    </Form>
  </div>
}
