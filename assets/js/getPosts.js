function getPosts(url, limit){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            console.log(data.items)
            let md = new Remarkable();

            let posts = '';

            for (let i = 0; i < data.items.length; i++) {
                const e = data.items[i];
                posts +=    '<article id="' + e.sys.id + '">' + 
                                '<h2><a href="?post=' + e.sys.id + '">' + e.fields.title + '</a></h2>' +
                                '<span className="info">' + moment(e.fields.date).format('LL') + '</span>' +
                                '<div class="postBody">' + md.render(e.fields.body) + '</div>'
                                '</article>'
            }



            document.getElementById('blog').innerHTML = posts
        }
    };
    xmlhttp.open('GET', url);
    xmlhttp.send();
}

let postsArray = ''
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'ahsp2ycgckbo';
const API_TOKEN = 'OkISM2VJTBhF45lWA4VxVXBmuyZb1Alec8FygVvjydk';

getPosts(API_BASE_URL + '/spaces/' + API_SPACE_ID + '/entries?access_token=' + API_TOKEN + '&content_type=blog&order=-fields.date')



{/* <article key={post.sys.id}>
          <h2>{post.fields.title}</h2>
          <span className="info">{moment(post.fields.date).format('LL')}</span>
          <Markdown className="postBody">{post.fields.body}</Markdown>
</article> */}