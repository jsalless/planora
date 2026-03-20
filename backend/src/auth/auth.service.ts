import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async register(createUserDto: CreateUserDto) {
        const user = await this.userService.create(createUserDto);
        const token = this._generateToken(user.id, user.email);
        return { user, token };
    }

    async login(looginDto: LoginDto) {
        const user = await this.userService.findByEmail(LoginDto.email);

        if (!user) {
            throw new UnauthorizedException('Credenciais inválidas')
        }

        const passmatch = await bcrypt.compare(password, user.password);
        if (!passmatch) {
            throw new UnauthorizedException ('Credenciais inválidas');
        }

        const { password: _ , ...safeUser } = user;
        const token = this._generateToken(user.id, user.email);

        return { user: safeUser, token };
    }

    private _generateToken(userId: string, email: string) {
        const payload = { sub: userId, email };
        return this.jwtService.sign(payload);
    }
}