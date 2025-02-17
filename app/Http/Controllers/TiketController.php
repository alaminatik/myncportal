<?php

namespace App\Http\Controllers;

use App\Models\ClientDetail;
use App\Models\Tiket;
use Illuminate\Http\Request;

class TiketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['clients'] = ClientDetail::where('company_name','!=', NULL)->get(); 

        return view('tiket',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $ticket = new Tiket;
        $ticket->ticket_number = 1;
        $ticket->company_id = 1;
        $ticket->user_id = $request->user_id;
        $ticket->subject = $request->ticket_subject;
        $ticket->status = 'open';
        $ticket->priority = 'low';     
        $ticket->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Tiket $tiket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tiket $tiket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tiket $tiket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tiket $tiket)
    {
        //
    }
}
