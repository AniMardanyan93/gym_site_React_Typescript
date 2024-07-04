import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  page:string;
  selectedPage:SelectedPage;
  setSelectedPage:(value:SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {

  const lowerCasePAge = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePAge} ? "text-primary-500": ""
        transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePAge}`}
      onClick={() => setSelectedPage(lowerCasePAge)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link