import json
import pathlib

# Ejemplo mínimo: en vez de scrapear en vivo, este script podría leer un archivo base
# y actualizar algunos campos o fusionar OA nuevos.

BASE_DIR = pathlib.Path(__file__).resolve().parents[1]
DATA_PATH = BASE_DIR / "data" / "oa-data.json"

def main():
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        oa_list = json.load(f)

    # Aquí podrías:
    # - Agregar OA desde otras fuentes,
    # - Actualizar URLs de MINEDUC,
    # - Marcar OA priorizados por sede/curso/año, etc.

    print(f"Se cargaron {len(oa_list)} OA desde oa-data.json")
    # Ejemplo: marcar todos como actualizados
    for oa in oa_list:
        oa.setdefault("meta", {})
        oa["meta"]["ultima_actualizacion_backend"] = "2025-11-15"

    with open(DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(oa_list, f, ensure_ascii=False, indent=2)

    print("Archivo oa-data.json actualizado con meta de backend.")

if __name__ == "__main__":
    main()
