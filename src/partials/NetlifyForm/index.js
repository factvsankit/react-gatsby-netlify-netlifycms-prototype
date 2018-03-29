import React from "react";

import styled from "styled-components";

const InputText = styled.input`
  width: 100%;
  border: 1px solid #d0d0d0;
  padding-left: 6px;
  padding-right: 6px;
  height: 34px;
  color: #777;
  display: block;
  margin-bottom: 10px;
  &:focus {
    outline: 0;
    border-color: #777;
  }
`;
const TextArea = styled.textarea`
  width:100%
  height:80px
  border: 1px solid #d0d0d0;
  padding-left: 6px;
  padding-right: 6px;
  color: #777;
  display:block;
  margin-bottom: 10px;
  &:focus {
    outline: 0;
    border-color: #777;
  }
`;

const Select = styled.select`
  width:100%
  border: 1px solid #d0d0d0;
  padding-left: 6px;
  padding-right: 6px;
  color: #777;
  height: 34px;
  display:block;
  margin-bottom: 10px;
  &:focus {
    outline: 0;
    border-color: #777;
  }
`;

const Button = styled.button`
  width: 100%;
  display: block;
  background-color: #1fb8a6;
  border: 0;
  color: #fff;
  height: 34px;
`;

class NetlifyForm extends React.Component {
  render() {
    const industries = this.props.industries;
    return (
      <div style={{ paddingTop: "20px" }}>
        <h3>Missing your AI-Startup?</h3>
        <form
          method="post"
          name="mysubmissions"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p style={{ display: "none" }}>
            <input name="bot-field" />
          </p>
          <InputText
            type="text"
            name="name"
            placeholder="Name of Your AI Startup"
            required
          />
          <Select name="industry" required>
            {industries.map((industry, i) => {
              return industry.node.frontmatter.addinn.map((in_name, j) => {
                return (
                  <option value={in_name.inn} key={j}>
                    {in_name.inn}
                  </option>
                );
              });
            })}
          </Select>
          <InputText type="text" name="url" placeholder="URL" required />
          <TextArea name="description" placeholder="Description" required />
          <InputText
            type="text"
            name="year"
            placeholder="Year Founded"
            required
          />
          <Button>Add your Startup</Button>
        </form>
      </div>
    );
  }
}

export default NetlifyForm;
