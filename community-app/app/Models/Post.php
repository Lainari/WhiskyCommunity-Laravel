<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'content', 'nickname', 'user_id', 'type'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function whisky()
    {
        return $this->hasOne(Whisky::class);
    }

    public function star()
    {
        return $this->hasOne(Star::class);
    }
}
