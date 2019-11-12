import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import moment from 'moment';
import Markdown from 'markdown-to-jsx';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <article key={post.sys.id}>
          <h2>{post.fields.title}</h2>
          <span className="info">{moment(post.fields.date).format('LL')}</span>
          <Markdown className="postBody">{post.fields.body}</Markdown>
        </article>
      );
    });
  }
  render() {
    return (
      <div>
        <section className="hero">
            <h1 className="mainLogo">inexorable<br>design.</h1>
            <div className="logoMark">
                <img src="assets/imgs/mark.svg" className="mark shadow" />
                <img src="assets/imgs/mark.svg" className="mark shadow2" />
                <img src="assets/imgs/mark.svg" alt="inexorable.design logo mark" className="mark" />
            </div>
        </section>
        
        <section className="blog">
            {this.renderPosts()} 
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
