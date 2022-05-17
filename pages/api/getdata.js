import axios from "axios";

export default async function handler(req, res) {

    try {
        const slug = req?.body?.slug?.toString() == "home" ? "''":req?.body?.slug;
        const type = req?.body?.type;

        if(!(type.toString())?.match(/[1-2]/)){
            return  res.status(200).json({status_code:400,status:"Bad request",message:"Invalid Type"});
        }
        
        if(!(req?.body?.slug.match("^[a-z0-9\-]+$"))){
            return  res.status(200).json({status_code:400,status:"Bad request",message:"Invalid Slug"});
        }

        switch (type) {
            case 1: {

                const project = await apicall("categories", "slug", slug);

                if (!project.status) {
                    return  res.status(200).json({status_code:"500",status:"Internal Server Error",message:"Api failed"});
                }

                const id = project?.data[0]?.id ||  0;
                let seodata = [];

                if (project?.data.length && project?.data[0].yoast_head_json) {
                    seodata = {
                        title : project?.data[0].yoast_head_json.title,
                    };
                }

                const postlist = await apicall("posts", "categories",id);
                const categorylist = await apicall("categories", "parent", id);
               
                if(!postlist?.status && !categorylist?.status){
                    return  res.status(200).json({status_code:"500",status:"Internal Server Error",message:"Api failed"});
                }

                const postlistdata = [];
                const categorylistdata = [];


                // console.log("postlist",postlist);
                // console.log("categorylist",categorylist);

                postlist?.data?.forEach(e => {
                    const data = {
                        id:e?.id,
                        slug:e?.slug,
                        title:e?.title?.rendered,
                    };
                    postlistdata.push(data);
                });

                categorylist?.data?.forEach(e => {
                    const data = {
                        id:e?.id,
                        slug:e?.slug,
                        title:e?.name,
                    };
                    categorylistdata.push(data);
                });


                const data = {
                    id : id,
                    postlist:postlistdata,
                    categorylist:categorylistdata,
                    seo : seodata,
                }

                return  res.status(200).json({status_code:200,status:"Success",data:data})
            }

            case 2: {
                const post = await apicall("posts", "slug", slug);

                if(!post.status){
                    return  res.status(200).json({status_code:500,status:"Internal Server Error",message:"Api failed"});
                }

                let data = {};

                data = {
                    "id" : post?.data[0]?.id,
                    'slug' : post?.data[0]?.slug,
                    'title' : post?.data[0]?.title?.rendered,
                    'content' : post?.data[0]?.content?.rendered,
                    'seo' : {
                        "title" : post?.data[0]?.yoast_head_json?.title ? post?.data[0]?.yoast_head_json?.title :post?.data[0]?.title?.rendered?.replace(/(<([^>]+)>)/gi, ""),
                        "description" : post?.data[0]?.yoast_head_json?.description ? post?.data[0]?.yoast_head_json?.description : post?.data[0]?.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, ""),
                    },
                };

                return  res.status(200).json({status_code:200,status:"Success",data:data})
            }
                
            default: {
                return  res.status(200).json({status_code:400,status:"Bad Request",message:"Invalid type"});
            }
        }
    } catch (error) {
        console.log("Error"+error.toString());
        return  res.status(200).json({status_code:500,status:"Internal Server Error",message:"Something wents wrong. Please try again"});
    }

}


async function apicall(type, param, id){
    const baseurl = "https://59k.1bf.myftpupload.com/wp-json/wp/v2/";
    const url = baseurl + type + "?" + param + "=" + id + "&per_page=100";
    
    try {
        const response = await axios.get(url)
        if(response.status == 200){
            return {data : response.data, status : true};
        }else{
            return { msg: "Error in api called" , status : false};
        }
    } catch (error) {
        return { msg: "Internal Server Error "+error.toString() , status : false};
    }

}