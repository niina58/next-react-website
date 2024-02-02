export default function Schedule() {
    return <h1>記事のタイトル</h1>
}

import { client } from 'lib/api'

export async function getstaticProps() {
    const resPromise = client.get({
        endpoint: 'blogs',
    })
    resPromise.then((res) => console.log(res).catch((err) => console.log(err)))

    return {
        props: {},
    }
}