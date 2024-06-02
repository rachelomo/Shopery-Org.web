import BlogListFilters from "./BlogListFilters";
import Subscribtion from "./Subscribtion";
import SectionImg from "../Components/SectionsImg";

const BlogList = () => {
  return (
    <div className="mb-10 ">
      <div>
        <SectionImg />
      </div>
      <BlogListFilters />
      <Subscribtion />
    </div>
  );
};

export default BlogList;
