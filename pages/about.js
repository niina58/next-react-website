import Meta from 'next/head'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import TwoColumn from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'image/about.jpg'

export default function about() {
    return (
        <Container>
            <Meta
                pageTitle="アバウト"
                pageDesc="About develoment activities"
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />

        <Hero title="About" subtitle="About develoment activities" />

        <figure>
            <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 1152px, 100vm"
            priorityplaceholder="blur"
            />
        </figure>
        <TwoColumn>
            <TwoColumn.Main>
            <PostBody>
                <p>
                Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、
                さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けていきます。
                </p>

                <h2>モノづくりで目指していること</h2>

                <p>
                モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。
                新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。
                たくさんの開発・提供が多くありますが、特にそこを磨く作業に力を入れていきます。
                </p>

                <p>
                単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながら
                ものづくりをしていきます。毎回課題解決テーマをもって「モノ」と向き合い制作し、
                フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への
                答えを出していきます。
                </p>

                <h3>新しいことへのチャレンジ</h3>

                <p>
                今までと違うものを作ることで愛着が湧いてきますそこで興味を持ったことは小さな
                ことでもいいから取り入れて、良いものを作れるようにしていきます。小さなヒント
                から新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
                </p>
            </PostBody>
            </TwoColumn.Main>
            <TwoColumn.Sidebar>
            <Contact />
            </TwoColumn.Sidebar>
        </TwoColumn>
        </Container>
    );
}