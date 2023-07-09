<template>
  <div>
    <DataTable
      :value="formats"
    >
      <Column 
        field="{qualityLabel, audioBitrate}"
        header="Quality"
      >
        <template #body="slotProps">
          {{ formatQuality(slotProps.data) }}
        </template>
      </Column>

      <Column 
        field="container"
        header="Format"
      />
      <Column 
        field="fileSize" 
        header="Size"
      />
      <Column 
        field="url" 
        header="URL"
      >
        <template #body="slotProps">
          <Button severity="primary">
            <a 
              :href="slotProps.data.url" 
              target="_blank"
              class="text-white no-underline"
              download
            >
              Download
            </a>
          </Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

defineProps({
  formats: Array,
})

function formatQuality(qualities) {
  const { qualityLabel, audioBitrate } = qualities
  return qualityLabel ? qualityLabel : audioBitrate + ' kb/s';
}
</script>

<style>
.p-datatable .p-datatable-tbody > tr > td {
  padding: 1.5rem !important;
  text-align: center !important;
}

.p-datatable .p-datatable-thead > tr > th .p-column-header-content {
  justify-content: center;
}

.p-datatable .p-datatable-tbody > tr {
  border: none;
}

.p-datatable .p-datatable-thead{
  text-align: center;
}
</style>