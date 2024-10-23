import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Product } from '../interfaces/product';
import { environment } from '../../environments/environment.development';

export const supabase = createClient(
  environment.supabaseUrl, 
  environment.supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  async getProducts(): Promise<Product[]> {
    let { data: products, error } = await supabase
    .from('products')
    .select('*')
    if (error) throw new Error(error.message);
    return products || [];
  }

  async getProductById(id: number): Promise<Product | null> {
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return product;
  }
}
