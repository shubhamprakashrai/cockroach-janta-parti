export type BlogPost = {
    slug: string;
    title: string;
    cat: string;
    excerpt: string;
    body: string[];
    author: string;
    date: string;
    readTime: string;
    img: string;
};

// Blogs are now managed from /admin. Anything you publish there
// appears on /blog and /blog/[slug] automatically. Leave this array
// empty so the static archive does not compete with live content.
export const blogPosts: BlogPost[] = [];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
    return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
