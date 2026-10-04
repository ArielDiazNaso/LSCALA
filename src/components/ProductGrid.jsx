import React from 'react';
import ProductCard from './ProductCard';
import { PackageOpen } from 'lucide-react';

export default function ProductGrid({ products, onOpenModal, onResetFilter }) {
  if (products.length === 0) {
    return (
      <div className="py-16 px-4 text-center bg-white rounded-3xl border border-[#EAE4DC] max-w-lg mx-auto my-8">
        <PackageOpen className="w-12 h-12 text-[#DEC195] mx-auto mb-4 stroke-1" />
        <h3 className="font-serif text-2xl font-medium text-[#1B1917] mb-2">
          No encontramos muebles con ese criterio
        </h3>
        <p className="text-sm text-[#78716C] mb-6">
          Probá buscando por otro término (ej: mesa, silla, vajillero, lino) o explorá todo el showroom.
        </p>
        <button
          type="button"
          onClick={onResetFilter}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#1B1917] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#B58548] transition-colors"
        >
          Ver todo el catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
}
