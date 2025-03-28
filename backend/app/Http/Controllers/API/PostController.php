<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index(Request $request) {
        $posts = Post::paginate(5);
        return response()->json([
            'status' => 1,
            "message" => "Post fetched",
            "data" => $posts
        ]);
    }

    public function store(Request $request) {       
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'body' => 'required',
            "price" => "required"

        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 0,
                'message' => 'validation errors.',
                'data' => $validator->errors()->all()
            ]);
        }

        $post = Post::create([
            "title" => $request->title,
            "body" => $request->body,
            "price" => $request->price
        ]);

        return response()->json([
            "status" => 1,
            "message" => "Post created",
            "data" => $post
        ]);
    }

    public function show(Request $request, $id) {
        $post = Post::find($id);
        return response()->json([
            "status" => 1,
            "message" => "Post return",
            "data" => $post
        ]);
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'body' => 'required',
            "price" => "required"

        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 0,
                'message' => 'validation errors.',
                'data' => $validator->errors()->all()
            ]);
        }
        $post = Post::find($id);
        $post->title = $request->title;
        $post->body = $request->body;
        $post->price = $request->price;
        $post->save();

        return response()->json([
            "status" => 1,
            "message" => "Post updated",
            "data" => $post
        ]);
    }

    public function destroy(Request $request, $id) {
        $post = Post::find($id);
        $post -> delete();
        return response()->json([
            "status" => 1,
            "message" => "Post deleted",
            "data" => null
        ]);
    }
}
