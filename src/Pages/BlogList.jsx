import BlogListFilters from "./BlogListFilters";
import Subscribtion from "./Subscribtion";
import SectionImg from "../Components/SectionsImg";
import UncoloredNavbar from "../Components/UncoloredNavbar";

const BlogList = () => {
  return (
    <div className="mb-10 ">
      <div>
        <UncoloredNavbar />
      </div>
      <div>
        <SectionImg />
      </div>
      <BlogListFilters />
      <Subscribtion />
    </div>
  );
};

export default BlogList;
