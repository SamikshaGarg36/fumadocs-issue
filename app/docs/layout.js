import { DocsLayout } from 'fumadocs-ui/layout';
import { pageTree } from '../../lib/docs-source';

export default function RootDocsLayout({ children }) {
    return (
        <DocsLayout tree={pageTree} nav={{ title: 'Luminum' }}>
            {children}
        </DocsLayout>
    );
}