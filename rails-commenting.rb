# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This line is creating the class BlogPostsController that is inheriting from ApplicationController, therefore Applicationcontroller is the superclass and blogpostscontroller is the subclass. 
class BlogPostsController < ApplicationController
  def index
    # ---2)this line is creating the instance variable posts and initiating the class BlogPost
    @posts = BlogPost.all
  end

  # ---3)this line defines a method called show that finds a specific BlogPost by its id parameter and assigns it to the @post instance variable.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) this line defines a method called new that initializes a new, empty BlogPost and assigns it to the @post instance variable.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)this line is attempting to create a new BlogPost record with the data passed in the blog_post_params. If the new post is valid (passes any validation rules), it redirects to the show page for the new post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)this line finds a specific BlogPost by its id parameter and assigns it to the @post instance variable.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this line updates an existing BlogPost with the data from blog_post_params. If the update is successful (the post is valid), it redirects to the show page for the updated post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)if a BlogPost is successfully destroyed (deleted) in the destroy method, this line redirects to the index page for blog posts.
      redirect_to blog_posts_path
    end
  end

  # ---9) this line defines a private section in the controller, indicating that the methods below this line are intended for internal use within the controller and not to be accessed directly by external code.
  private
  def blog_post_params
    # ---10) this line specifies that certain parameters (title and content) are required within the params hash, and they are permitted for mass assignment to create or update a BlogPost.
    params.require(:blog_post).permit(:title, :content)
  end
end
