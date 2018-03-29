import React from "react";
import Link from "gatsby-link";

import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import NetlifyForm from "../partials/NetlifyForm/";
import AIListings from "../partials/AIListings/";

class IndexPage extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark;
    const industries = data.edges;
    return (
      <div style={{ paddingTop: "20px" }}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={6} computer={4}>
              <NetlifyForm industries={industries} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={12}>
              <AIListings />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query industryQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            addinn {
              inn
            }
          }
        }
      }
    }
  }
`;
