import React from 'react';
// import BlogPosts from "./BlogPosts.json";

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTime: null,
			blogPosts: null,
			title: "",
			content: ""
		}
		// this.onSubmit = this.onSubmit.bind(this)
		// this.onChange = this.onChange.bind(this)
    }
    async componentDidMount() {
		console.log("the component did mount")
		await this.setState({
			currentTime: new Date(),
            // blogPosts: journalData
            
        })
        
        const newBlogPost = {
			date: new Date().toISOString(),
			title: this.state.title,
			paragraphs: [this.state.content]
        }
	} 
        
render() {
    return(
		<div>hello</div>
        // <BlogPosts />
	// async componentDidMount() {
	// 	console.log("the component did mount")
	// 	await this.setState({
	// 		currentTime: new Date(),
	// 		blogPosts: journalData
	// 	})
	// 	console.log("the component set the blog state:", this.state)
    )
}
}
export default Blog;