
"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

interface IdFormProps {
  onIdSubmitted: () => void;
}

export function IdForm({ onIdSubmitted }: IdFormProps) {
  const [userId, setUserId] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId.trim() === '') {
        toast({
            title: "Erro de Validação",
            description: "Por favor, insira seu ID de usuário.",
            variant: "destructive",
        })
        return;
    }
    // Future implementation: send webhook or handle submission
    console.log('User ID Submitted:', userId);
    toast({
        title: "Enviado com Sucesso!",
        description: "Seu ID foi enviado. Você foi para o próximo passo.",
    })
    setUserId('');
    onIdSubmitted();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setUserId(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        pattern="\d*"
        placeholder="Seu ID de usuário"
        value={userId}
        onChange={handleInputChange}
        required
        aria-label="ID de Usuário"
      />
      <Button type="submit">
        Enviar
      </Button>
    </form>
  );
}
