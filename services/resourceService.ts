
import { Resource } from "../types";
import { highSchoolResources } from "../data/resources/highschool";
import { middleSchoolResources } from "../data/resources/middleschool";
import { primarySchoolResources } from "../data/resources/primaryschool";

const RESOURCES_STORAGE_KEY = "daytoan_resources_db";

// ============================================================================
// KHU VỰC DỮ LIỆU GỐC (SEED DATA)
// Dữ liệu được chia nhỏ trong thư mục /data/resources/
// ============================================================================

const SEED_RESOURCES: Resource[] = [
  ...highSchoolResources,
  ...middleSchoolResources,
  ...primarySchoolResources
];

// ============================================================================
// KẾT THÚC KHU VỰC DỮ LIỆU GỐC
// ============================================================================

export const getResources = (): Resource[] => {
  try {
    const stored = localStorage.getItem(RESOURCES_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Lỗi đọc Resources DB", e);
  }
  // Init seed data
  localStorage.setItem(RESOURCES_STORAGE_KEY, JSON.stringify(SEED_RESOURCES));
  return SEED_RESOURCES;
};

export const saveResourcesToStorage = (resources: Resource[]) => {
  localStorage.setItem(RESOURCES_STORAGE_KEY, JSON.stringify(resources));
};

export const addResource = (newResource: Omit<Resource, 'id' | 'downloads'>) => {
  const resources = getResources();
  const resourceToAdd: Resource = {
    ...newResource,
    id: Date.now(),
    downloads: 0
  };
  // Add to top
  const updated = [resourceToAdd, ...resources];
  saveResourcesToStorage(updated);
  return updated;
};

export const deleteResource = (id: string | number) => {
  let resources = getResources();
  resources = resources.filter(r => r.id !== id);
  saveResourcesToStorage(resources);
  return resources;
};
