<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Products');
    }

    public function show($id)
    {
        return Inertia::render('Product', [
            'productId' => $id
        ]);
    }
}