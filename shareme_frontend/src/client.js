import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'yohnvxdz',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skJ01AMHmiNamcNRtjcyKbXq1JbWww7B7aeUlFKx6gItNECoWjkchlLknf0UIhTgFO6xGv4mQyXtsHYh2euuVdZQQiHqHgUk7zT9gZGti788LeOMmDpZPSs2MBC7BlwOM9W8MYwOAb11Z1RBNWOYwy2x5EGSVH1pGV0jgrsNWBR5kbc5809T',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)