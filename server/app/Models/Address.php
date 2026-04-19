<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Address extends Model
{
    protected $fillable = [
        'profile_id',
        'street',
        'postal_code',
        'city',
        'province',
    ];

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class, 'user_id');
    }
}
