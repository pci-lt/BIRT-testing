[{$match:{
	 form_id:11044,
	deleted_at:{$exists:false},
	connection_id: 1937,
	answers.f1054000a030000000000012: { $in: ['paco', 'estimacion', 'liberada', 'factura']},
	answers.f1054000a030000000000013: { $in: ['por_facturar' , 'por_pagar']},
}},
{$group: {_id:{
	estatus_cob: '$answers.f1054000a030000000000012',
	tipo_tarea: '$answers.f1054000a010000000000021',
	tipo_instalacion: '$answers.f1054000a020000000000004',
	metros: '$answers.f1054000a0200000000000d7'

  },
  		cantidad: {$sum:1}

}}

]
