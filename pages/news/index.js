import {Fragment} from "react";
import Link from "next/link";

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-good">
                        NextJS is GOOD
                    </Link>
                </li>
                <li>
                    <Link href="/news/something-else">
                        Something else
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;
