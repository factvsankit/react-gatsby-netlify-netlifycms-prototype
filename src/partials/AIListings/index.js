import React from "react";
import axios from "axios";
import Link from "gatsby-link";

import { Input, Header, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const form_api_query_url = `${process.env.GATSBY_NF_FORM_API_URL}
/v1/forms/${process.env.GATSBY_NF_FORM_ID}/
submissions?access_token=${process.env.GATSBY_NF_ACCESS_TOKEN}`;

class AIListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NFFormData: [],
      search: ""
    };
  }
  componentDidMount() {
    axios.get(form_api_query_url).then(
      function(response) {
        const result = response.data;
        this.setState({
          NFFormData: result,
          search: ""
        });
      }.bind(this)
    );
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.toLowerCase().substr(0, 20) });
  }
  render() {
    const { NFFormData } = this.state;
    return (
      <div style={{ paddingTop: "20px" }}>
        <h3>AI Startup List</h3>
        <Input
          icon="search"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Startup</Table.HeaderCell>
              <Table.HeaderCell>Industry</Table.HeaderCell>
              <Table.HeaderCell>URL</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Year Found</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {NFFormData.map((li, j) => {
              return (
                <Table.Row key={j} name={li.data.name}>
                  <Table.Cell>{li.data.name}</Table.Cell>
                  <Table.Cell>{li.data.industry}</Table.Cell>
                  <Table.Cell>
                    <a href={`http://${li.data.url}`} target="_blank">
                      {li.data.url}
                    </a>
                  </Table.Cell>
                  <Table.Cell>{li.data.description}</Table.Cell>
                  <Table.Cell>{li.data.year}</Table.Cell>
                </Table.Row>
              );
            }).filter(li => {
              return (
                li.props.name.toLowerCase().indexOf(this.state.search) !== -1
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default AIListings;
