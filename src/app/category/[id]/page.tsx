import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { fetchCategoryById } from '@/services/fetchCategoryById';
import { fetchGamesMenu } from '@/services/fetchGamesMenu';
import Image from 'next/image';

export async function generateStaticParams() {
  const categories = await fetchGamesMenu();

  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

type MetaProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params, searchParams }: MetaProps) {
  const id = params.id;
  const category = await fetchCategoryById(id);

  return {
    title: category.gameText,
    description: `${category.gameText} game category`,
  };
}
type Props = {
  params: { id: string };
};
export default async function Page({ params }: Props) {
  const category = await fetchCategoryById(params.id);

  return (
    <section>
      <Card className="max-w-80 w-full">
        <CardHeader className="text-center">
          <CardTitle>{category.gameText}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={category.image.original.src}
            width={400}
            height={200}
            alt={`${category.gameText} logo`}
          />
        </CardContent>
        <CardFooter>
          <p>Provider: {category.provider}</p>
        </CardFooter>
      </Card>
    </section>
  );
}
