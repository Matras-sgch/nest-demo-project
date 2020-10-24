import { ExceptionFilter, HttpException, ArgumentsHost, Catch } from "@nestjs/common";
import { Response, Request } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx =  host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()
        const status = exception.getStatus()

        return response.status(status).json({
            status: status,
            timestamp: new Date().toISOString(),
            path: request.url
        })
        // throw new Error('Method not implemented.')
    }
}