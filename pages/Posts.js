function EachPost() {
    return (
        <article>
            <a href="post.html">
                <h3 >記事のタイトル</h3>
            </a>
        </article>
    )
}

export default function Posts() {
    const props1 = {title: '記事タイトル１', url: 'post1.html'}
    const props2 = { title: "記事タイトル２", url: "post2.html" };

    return (
        <section>
            <h2>おすすめ記事</h2>
            <EachPost title = "スケジュール管理と猫の理論" url = "/blog/schedule" />
            <EachPost title = "音楽が呼び起こす美味しいのもの記憶" url = "/blog/music"/>
        </section>
    );
}