'use strict';

import { APIGatewayEvent } from 'aws-lambda';
import { getConnection } from "../database/database"

export const getAllPersonas = async (event: APIGatewayEvent) => {
  try {

    const connection = await getConnection()
    const result = await connection.query("SELECT * FROM personas");

    if (result.length !== 0 ) {
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Success',
            data: result
          },
        ),
      };
    } else {

      return {
        statusCode: 400,
        body: JSON.stringify(
          {
            message: 'Not user found',
          },
        ),
      };
      
    }
    
  } catch (error) {

    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'Bad Request',
          error: error
        },
      ),
    };

  }
};

export const getPersona = async (event: APIGatewayEvent) => {

  try {

    const connection = await getConnection()
    const result = await connection.query(`SELECT * FROM personas WHERE cedula = ${event.pathParameters?.cedula}`);
    
    if (result.length !== 0 ) {
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Success',
            data: result
          },
        ),
      };
    } else {

      return {
        statusCode: 400,
        body: JSON.stringify(
          {
            message: 'Not user found',
          },
        ),
      };

    }
    
    
  } catch (error) {

    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'Bad Request',
          error: error
        },
      ),
    };

  }
};

export const addPersona = async (event: APIGatewayEvent) => {

  let parsedBody = JSON.parse(event.body!)

  try {

    if (event.body && event.body !== ''){

      const connection = await getConnection()
      const result = await connection.query("INSERT INTO personas set ?", parsedBody);

      if ( result.affectedRows > 0 ) {

        return {
          statusCode: 200,
          body: JSON.stringify(
            {
              message: 'Añadido Correctamente',
            },
          ),
        };

      }
    }
   
  } catch (error) {

    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'Bad Request',
          error: error
        },
      ),
    };
  }
 
};

export const deletePersona = async (event: APIGatewayEvent) => {

  try {

    const connection = await getConnection()
    const result = await connection.query(`DELETE FROM personas where cedula = ${event.pathParameters?.cedula}`);

    if ( result.affectedRows > 0 ) {

      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Eliminado Correctamente',
          },
        ),
      };

    } else {
      return {
        statusCode: 400,
        body: JSON.stringify(
          {
            message: 'Not user found',
          },
        ),
      };
    }
  
  } catch (error) {

    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'Bad Request',
          error: error
        },
      ),
    };
  }
 
};

export const editPersona = async (event: APIGatewayEvent) => {

  let parsedBody = JSON.parse(event.body!)

  try {

    const connection = await getConnection()
    const result = await connection.query(`UPDATE personas SET nombre = '${parsedBody.nombre}', apellido = '${parsedBody.apellido}' WHERE cedula = ${event.pathParameters?.cedula}`);

    if ( result.affectedRows > 0 ) {

      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Actualizado Correctamente',
          },
        ),
      };

    } else {
      return {
        statusCode: 400,
        body: JSON.stringify(
          {
            message: 'Not user found',
          },
        ),
      };
    }
  
  } catch (error) {

    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'Bad Request',
          error: error
        },
      ),
    };
  }
 
};