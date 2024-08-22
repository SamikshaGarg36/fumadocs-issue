import { getPage, getPages, pageTree } from '../../../lib/docs-source';
import { DocsLayout } from 'fumadocs-ui/layout';
import { useRouter } from "next/router";
import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { MDXContent } from '@content-collections/mdx/react';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { useState, useEffect } from 'react';

export default function Page({ page }) {
    if (!page) {
        return <div>Page not found</div>;
    }
    console.log(defaultMdxComponents)
    console.log(page.data)

    return (
        <DocsLayout tree={pageTree} nav={{ title: 'My App' }}>
            <DocsPage toc={page.data.toc} full={page.data.full}>
                {/* <DocsTitle>{page.data.title}</DocsTitle> */}
                {/* <DocsDescription>{page.data.description}</DocsDescription> */}
                <DocsBody>
                    <MDXContent
                        code={page.data.mdx}
                        components={{ ...defaultMdxComponents }}
                    />
                </DocsBody>
            </DocsPage>
        </DocsLayout>
    );
}

export async function getStaticPaths() {
    const paths = getPages().map((page) => {
        const slug = Array.isArray(page.slugs) ? page.slugs.join('/') : page.slugs;
        return {
            params: { slug },
        };
    });

    return {
        paths,
        fallback: false, // or 'blocking' if you want SSR for non-existent paths
    };
}


export async function getStaticProps({ params }) {
    const slug = Array.isArray(params.slug) ? params.slug : [params.slug]; // Ensure `slug` is always an array
    const page = getPage(slug);
    console.log(page)

    if (!page) {
        return {
            notFound: true,
        };
    }

    // Ensure undefined values are set to null or removed
    const sanitizedPage = {
        ...page,
        file: {
            ...page.file,
            locale: page.file?.locale ?? null, // Set undefined locale to null
        },
    };

    return {
        props: {
            page: sanitizedPage,
        },
    };
}